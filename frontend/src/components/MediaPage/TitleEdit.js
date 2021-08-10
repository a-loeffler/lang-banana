


const TitleEdit = ({pageType, previousTitle, setEditOpen}) => {


    const editSubmit = (e) => {
        e.preventDefault();

        setEditOpen(false)
    }

    return (
        <form className="media-page-title-edit-container">
            <input type="text" placeholder={previousTitle} className="media-page-edit-field">
            </input>
            <button type="submit" className="media-page-edit-submit" onClick={e => editSubmit(e)}>Confirm</button>
        </form>
    )


}

export default TitleEdit;