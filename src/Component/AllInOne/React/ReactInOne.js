import { useContext, useState, useEffect, useRef } from 'react'
import { Nav, Footer } from '../../'
import { ThemeContext } from '../../../Context'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import './ReactInOne.css'
import Notification from '../../Notification'
import axios from 'axios'
import dateToReadable from '../../Util/dateToReadable'
import { setItemWithExpiration, getItemWithExpiration } from '../../Cache'
import { AlertMessage } from '../../Helpers'
import { Loading } from '../../UI'

export default function ReactInOne(props) {
  const [posts, setPosts] = useState()
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    // Get an item from localStorage and check for expiration
    const postsFromCache = getItemWithExpiration('posts')
    if (postsFromCache) {
      // Use the retrieved value
      setPosts(postsFromCache)
      setIsLoading(false)
    } else {
      // Value has expired or does not exist
      axios
        .get('https://api.abassdev.com')
        .then((response) => {
          if (response) {
            // console.log(response);
            setPosts(response.data)
            setItemWithExpiration('posts', response.data, 1440)
            setIsLoading(false)
          }
        })
        .catch((error) => {
          setIsLoading(false)
          console.log(error)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }, [])

  const CodeSnippet = ({ code }) => {
    const codeRef = useRef(null)
    const notyf = new Notification(2000, 'center', 'center')

    const handleCopy = () => {
      const textArea = document.createElement('textarea')
      textArea.value = code
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      notyf.success('Copy!')
    }

    return (
      <div style={{ position: 'relative' }}>
        <SyntaxHighlighter language='javascript' style={vscDarkPlus} ref={codeRef}>
          {code}
        </SyntaxHighlighter>
        <button
          type='button'
          data-bs-toggle='tooltip'
          data-bs-placement='right'
          title='Copy'
          className='btn btn-secondary'
          onClick={handleCopy}
          style={{
            position: 'absolute',
            top: '8px', // adjust the top position as needed
            right: '8px', // adjust the right position as needed
            border: 'none',
          }}
        >
          <i className='copy-code-button fa fa-copy'></i>
        </button>
      </div>
    )
  }

  const [storedTheme, setStoredTheme] = useState('light')
  const localStorage = window.localStorage
  const { theme } = useContext(ThemeContext)
  
  useEffect(() => {
    let sthm = localStorage.getItem('theme')
    if (sthm) {
      setStoredTheme(sthm)
    }
  }, [localStorage, theme])

  const metaData = {
    title: 'Learn ReactJs in one page',
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <div id={storedTheme && storedTheme}>
      <Nav metaData={metaData} active={'reactjs-in-one'} />
      <div className='container'>
        <div className='row'>
          <div className='col-12 mb-3 mt-4'>
            <h1 className='primary-text primary-font'>ReactJs in one</h1>
            <p className='after-title'></p>
          </div>
          {posts ? (
            posts.map((value, index) => {
              return (
                <div key={value.id} className='col-12 card border-0 shadow-sm rounded-0 mb-5'>
                  <div className='row card-body'>
                    <div className='col-md-6'>
                      <CodeSnippet code={value.codesniper} />
                    </div>
                    <div className='col-md-6 mt-4 mt-lg-0'>
                      <h1 className='h3'>
                        <a href={`#${value.title.replaceAll(' ', '-')}-${value.id}`}>
                          {value.id}#. {value.title}
                        </a>
                      </h1>
                      <p id={`${value.title.replaceAll(' ', '-')}-${value.id}`} className='card-text'>
                        <strong>Description: </strong>
                        {value.description}
                      </p>
                      <p className='text-secondary'>Published on: {dateToReadable(value.created_at)}</p>
                    </div>
                  </div>
                </div>
              )
            })
          ) : (
            <div className='col'>
              <AlertMessage type='error' message='Blog posts are not available yet due to some technical issues.' />
            </div>
          )}
        </div>
      </div>
      <Footer report='AllInOne/React/ReactInOne.js' />
    </div>
  )
}
