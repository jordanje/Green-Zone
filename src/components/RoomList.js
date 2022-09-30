export default function RoomList () {
    return (
        <div>
            <form>
                <input type="text" placeholder="New Room"/>
                <input type="submit" value="Create" />
            </form>
            <label>Add plant to 
                <select>
                    <option value="kitchen">Kitchen</option>
                 </select>
            </label>
        </div>
    )
}