const Notification = ({ notificationMessage }) => {
  if (notificationMessage.message === null) {
    return null
  }

  const messageStyle = {
    color: 'green',
    borderStyle: 'solid',
    padding: '10px'
  }

  if (notificationMessage.messageType === 'error') {
    messageStyle.color = 'red'
  }

  return (
    <div style={messageStyle}>
      {notificationMessage.message}
    </div>
  )
}

export default Notification