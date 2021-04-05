const Avatar = ({speaker}) => {
    return (
        <>
            <img src={`/avatars/${speaker}.jpg`} class="rounded-md avatar" />
        </>
    )
}

Avatar.defaultProps = {
    speaker: "me"
}

export default Avatar
