import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import theme from '@styles/theme'
import Layout from '@components/Layout'
import Home from '@pages/Home'

// 页面组件
const Characters = () => <div>人物志</div>
const Timeline = () => <div>时间线</div>
const Gallery = () => <div>图库</div>

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </Layout>
      </Router>
    </ChakraProvider>
  )
}

export default App
