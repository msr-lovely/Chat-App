const Avatar = ({speaker}) => {
    return (
        <>
            <img src={`/avatars/${speaker}.jpg`} className="rounded-md avatar" />
        </>
    )
}

Avatar.defaultProps = {
    speaker: "me"
}

export default Avatar
