import React from 'react'

const ShareButton = (props) => {
      const {shareText,shareUrl} = props
  const handleShareClick = async () => {
    try {
      await navigator.share({
        text: shareText,
        url: shareUrl,
      })
    } catch (error) {
      console.error('Error sharing content:', error)
    }
  }

  return (
    <button className="btn btn-primary" type="button" onClick={handleShareClick}>
      Share
    </button>
  )
}

export default ShareButton
