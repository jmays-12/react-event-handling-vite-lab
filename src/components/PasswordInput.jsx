// Code PasswordInput Component Here




function PasswordInput() {

    function handleChange() {
        console.log("Entering password...")
    };


    return (
        <>
            <input
                id="passwordfield"
                type="password"
                placeholder="Enter password"
                onChange={() =>
                    handleChange()
                }>
            </input>


        </>
    )
}

export default PasswordInput;