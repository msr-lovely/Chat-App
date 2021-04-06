const Avatar = ({speaker}) => {
    const avatarURL = `/avatars/${speaker}.jpg`;
    return (
        <>
            <img src={avatarURL} className="rounded-md avatar" />
        </>
    )
}

Avatar.defaultProps = {
    speaker: "me"
}

export default Avatar
