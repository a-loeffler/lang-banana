import { useState } from "react";


const TitleEdit = ({typeOfPage, previousTitle, setEditOpen, setTitle}) => {


    const [pageTitle, setPageTitle] = useState(previousTitle)

    const editSubmit = (e) => {
        e.preventDefault();
        setTitle(pageTitle)
        setEditOpen(false)
    }

    return (
        <form className="media-page-title-edit-container">
            <input type="text" placeholder={previousTitle} className="media-page-edit-field" value={pageTitle} onChange={e => setPageTitle(e.target.value)}>
            </input>
            <button type="submit" className="media-page-edit-submit" onClick={e => editSubmit(e)}>Confirm</button>
        </form>
    )


}

export default TitleEdit;