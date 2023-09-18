const PasswordInput = ({label,placeholder, styleInput}) => {
    return (
        <div className={`passwordInputDiv flex flex-col space-y-2 w-full ${styleInput}`}>
            <label className="font-semibold" htmlFor="inp">{label}</label>
            <input
                type="password"
                placeholder={placeholder}
                className="p-2 border border-gray-400 border-solid rounded placeholder-gray-500"
                id="inp"
            />
        </div>
    )
}

export default PasswordInput;