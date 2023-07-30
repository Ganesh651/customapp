import {useState} from 'react'
import ShareButton from '../ShareButton'
import './index.css'

const ButtonMaker = () => {
  const [backgroundColor, setBackgroundColor] = useState('')
  const [color, setColor] = useState('')
  const [fontSize, setFontSize] = useState('')
  const [fontWeight, setFontWeight] = useState('')
  const [padding, setPadding] = useState('')
  const [borderRadius, setBorderRadius] = useState('')
  const [buttonText, setButtonText] = useState('Custom Button')
  const [styles, setStyles] = useState({})
  console.log(styles)

  const onChangeButtonText = e => {
    setButtonText(e.target.value)
  }

  const onChangeBackgroundColor = e => {
    setBackgroundColor(e.target.value)
  }

  const onChangeColor = e => {
    setColor(e.target.value)
  }

  const onChangeFontWeight = e => {
    setFontWeight(e.target.value)
  }

  const onChangeFontSize = e => {
    setFontSize(e.target.value)
  }

  const onChangePadding = e => {
    setPadding(e.target.value)
  }

  const onChangeBorderRadius = e => {
    setBorderRadius(e.target.value)
  }

  const onclickToChange = () => {
    setStyles({
      backgroundColor,
      color,
      fontSize,
      fontWeight,
      padding,
      borderRadius,
      buttonText,
    })
    setBackgroundColor('')
    setBorderRadius('')
    setColor('')
    setFontSize('')
    setFontWeight('')
    setPadding('')
  }

  const font = parseInt(styles.fontWeight)

  const shareText = 'Make your own button';
  const shareUrl = 'https://clist.ccbp.tech/';

  const isShareSupported = navigator.share !== undefined;

  return (
    <div className="button-maker-bg-container p-4">
      <h1 className="button-maker-heading text-center mb-4">Button Maker</h1>
      <div className="button-maker-container bg-light pt-4 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7">
              <p className="input-label">BUTTON TEXT</p>
              <input
                onChange={onChangeButtonText}
                value={buttonText}
                className="user-input"
                type="text"
              />
              <p className="input-label">BACKGROUND COLOR</p>
              <input
                onChange={onChangeBackgroundColor}
                value={backgroundColor}
                className="user-input"
                type="text"
              />
              <p className="input-label">FONT COLOR</p>
              <input
                onChange={onChangeColor}
                value={color}
                id="fontColorInput"
                className="user-input"
                type="text"
              />
              <p className="input-label">FONT SIZE (in px)</p>
              <input
                onChange={onChangeFontSize}
                value={fontSize}
                id="fontSizeInput"
                className="user-input"
                type="text"
              />
              <p className="input-label">FONT WEIGHT</p>
              <input
                onChange={onChangeFontWeight}
                value={fontWeight}
                id="fontWeightInput"
                className="user-input"
                type="text"
              />
              <p className="input-label">PADDING (in px)</p>
              <input
                onChange={onChangePadding}
                value={padding}
                id="paddingInput"
                className="user-input"
                type="text"
              />
              <p className="input-label">BORDER RADIUS (in px)</p>
              <input
                onChange={onChangeBorderRadius}
                value={borderRadius}
                id="borderRadiusInput"
                className="user-input"
                type="text"
              />
              <div className="text-right mt-4">
                <button
                  type="button"
                  onClick={onclickToChange}
                  id="applyButton"
                  className="btn btn-primary"
                >
                  Apply
                </button>
              </div>
            </div>
            <div className="col-12 col-md-5 mt-4 text-center">
              <button
                style={{
                  color: `${styles.color}`,
                  backgroundColor: `${styles.backgroundColor}`,
                  fontSize: `${styles.fontSize}`,
                  padding: `${styles.padding}`,
                  borderRadius: `${styles.borderRadius}`,
                  fontWeight: `${font}`,
                }}
                type="button"
                className="custom-button"
              >
                {buttonText}
              </button>
              <div>
      {/* Your content here */}
      <p className='input-label'>{shareText}</p>
      <a href={shareUrl}>{}</a>
      {/* Conditionally render ShareButton based on support */}
      {isShareSupported && <ShareButton  shareText={shareText} shareUrl={shareUrl} />}
    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ButtonMaker
