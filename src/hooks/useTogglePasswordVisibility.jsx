import { useState } from "react";

const useTogglePasswordVisibility = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    return { showPassword, togglePasswordVisibility };
};

export default useTogglePasswordVisibility;