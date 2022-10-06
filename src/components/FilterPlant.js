import "./FilterPlant.css"

export default function FilterPlant ({careLevel, handleCareLevel}) {
    return (
    <select value={careLevel} onChange={handleCareLevel} className="filter-plant">
        <option>Filter Care Level</option>
        <option>EASY</option>
        <option>MEDIUM</option>
        <option>HARD</option>
    </select>
    )
}