import styled from 'styled-components'

export const MainHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  text-align: center;
  margin-bottom: 32px;
`

export const MainContainer = styled.div`
  display:flex;
  flex-direction: column;
  background-color: #f2f2f2;
  font-family: 'Roboto';
  min-height: 100vh;
  padding : 20px 12px;
`

export const TextArea = styled.textarea`
  height : 130px;
  color: #1e293b;
  width: 100%;
  min-height: 25vh;
  border: 1px solid #d7dfe9;
  border-radius: 4px;
  padding: 16px;
  max-width: 450px;
  outline: none;
  font-family: 'Roboto';
  font-size: 18px;
  margin-top: 8px;

  @media(min-width : 768px){
    max-width : 768px;
  }
`

export const ReplaceInput = styled.input`
  color: #1e293b;
  font-size: 18px;
  width: 100%;
  height: 45px;
  border: 1px solid #d7dfe9;
  border-radius: 4px;
  padding-left: 16px;
  outline: none;
  margin-top: 8px;
`

export const ParagraphText = styled.p`
  font-size: 18px;
  color: #333;
  line-height: 1.5;
  margin: 20px 0;
  width: 100%;

  @media(min-width : 768px){
    overflow: auto;
    padding-top: 12px;
    padding-left: 8px;
    height:75%;
  }
`

export const ResponsiveContainer = styled.div`
  @media(min-width : 768px){
    display: flex;
  flex-direction: row;
  padding-top: 12px;
  }
`

export const InputLabel = styled.label`
  font-family : 'Roboto';
  font-size : 20px;
  color: #6464ad;
  font-weight: 500;
  display : block;
  margin-top: 12px;

  @media(min-width : 768px){
    margin-top: 0px;
  }
`

export const Container = styled.div`
  margin : 12px 0px 0px 0px;
`
export const MetricName = styled.p`
  font-family:'Roboto';
  color : #333333;
  font-size: 18px;
`

export const MetricsContainer = styled.div`
  display: flex;
  flex-direction : row;
  justify-content: space-around;
`

export const ReplaceBtn = styled.button`
  border: 0px;
  outline : none;
  padding: 6px;
  color : #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
  background-color: #6A5ACD;
  width: 96px;
  border-radius: 8px;
  margin-top: 8px;
`

export const InputContainer = styled.div`
  width:100%;
  @media(min-width:768px){
    width: 50%;
  }
`

export const TextContainer = styled.div`
  width : 100%;

  @media(min-width : 768px){
   width: 50%;
   max-height: 100vh;
  }
`
