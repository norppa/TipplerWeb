

const Input = (props) => {
    if (props.text) {
        const [value, setter] = props.text
        return <input type='text' className={props.className} value={value} onChange={(event) => setter(event.target.value)} />
    }

    if (props.checkbox) {
        const [value, setter] = props.checkbox
        return <input type='checkbox' className={props.className} checked={value} onChange={() => setter(!value)} />
    }

    console.error('Input type missing')
    return null
}

export default Input