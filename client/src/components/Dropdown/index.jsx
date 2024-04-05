import { useState } from "react";

const uniqueOptions = (profiles) => {
    const options = ["All Departments"];
    profiles.map(profile => {
        if (!options.includes(profile.department)) {
            options.push(profile.department)
        }
    })
    return options
};

function DropdownForm({ profiles, setSelectedDepartments }) {

    const options = uniqueOptions(profiles)
    const [selected, setSelected] = useState(options[0])

    const submit = (event) => {
        setSelected(event.target.value)
        setSelectedDepartments(event.target.value)
    }

    return (
        <form>
            <select
                value={selected}
                onChange={submit}>
                {options.map((profile) => (
                    <option value={profile} key={profile}>
                        {profile}
                    </option>
                ))}
            </select>
        </form>
    );
}
export default DropdownForm;