const TextInput = ({label,placeholder,styleInput}) => {
    return (
        <div className={`inputTextDiv flex flex-col space-y-2 w-full ${styleInput}`}>
            <label className="font-semibold" htmlFor="inp">{label}</label>
            <input
                type="text"
                placeholder={placeholder}
                className="p-2 border border-gray-400 border-solid rounded placeholder-gray-500"
                id="inp"
            />
        </div>
    )
}

export default TextInput;