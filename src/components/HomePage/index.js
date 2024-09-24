import {useState, useEffect, useRef} from 'react'
import {
  MainContainer,
  TextArea,
  ParagraphText,
  ReplaceInput,
  InputLabel,
  Container,
  MainHeading,
  MetricName,
  MetricsContainer,
  ReplaceBtn,
  ResponsiveContainer,
  InputContainer,
  TextContainer,
} from './styledComponents'

const TextAreaInput = () => {
  const [text, setText] = useState('')
  const [lexiCount, setLexiCount] = useState(0)
  const [charCount, setCharCount] = useState(0)
  const [findText, setFindText] = useState('')
  const [replaceText, setReplaceText] = useState('')

  const changeTheTextArea = event => {
    const text = event.target.value
    setText(text)
  }

  const getUniqueWordCount = text => {
    const words = text.match(/\b\w+\b/g) || []
    const lowerCaseWords = words.map(word => word.toLowerCase())
    const uniqueWords = new Set(lowerCaseWords)
    return uniqueWords.size
  }

  const getCharacterCount = text => {
    const cleanedText = text.replace(/[^\w]|_/g, '')
    return cleanedText.length
  }

  useEffect(() => {
    const uniqueWordsCount = getUniqueWordCount(text)
    const charactersCount = getCharacterCount(text)
    setLexiCount(uniqueWordsCount)
    setCharCount(charactersCount)
  }, [text])

  const updateFindText = event => setFindText(event.target.value)
  const updateReplaceText = event => setReplaceText(event.target.value)

  const handleReplace = () => {
    const regex = new RegExp(findText, 'gi')
    const newText = text.replace(
      regex,
      `<span style="color: blue; font-weight: bold;">${replaceText}</span>`,
    )
    setText(newText)
  }

  console.log(text, findText, replaceText)

  return (
    <MainContainer>
      <MainHeading>Text Metrics</MainHeading>
      <MetricsContainer>
        <MetricName>Lexi-Count: {lexiCount}</MetricName>
        <MetricName>Char-Count: {charCount}</MetricName>
      </MetricsContainer>
      <ResponsiveContainer>
        <InputContainer>
          <InputLabel>Enter the Text Below:</InputLabel>
          <TextArea
            placeholder="Enter the Text Here..."
            onChange={changeTheTextArea}
          />
          <Container>
            <InputLabel>Find The Text</InputLabel>
            <ReplaceInput onChange={updateFindText} />
          </Container>
          <Container>
            <InputLabel>Enter The Text To Replace</InputLabel>
            <ReplaceInput onChange={updateReplaceText} />
          </Container>
          <ReplaceBtn onClick={handleReplace}>Replace</ReplaceBtn>
        </InputContainer>
        <TextContainer>
          <InputLabel>Content Area</InputLabel>
          <ParagraphText dangerouslySetInnerHTML={{__html: text}} />
        </TextContainer>
      </ResponsiveContainer>
    </MainContainer>
  )
}

export default TextAreaInput
