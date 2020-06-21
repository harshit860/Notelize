const deleteNote = (note) => (
    {
        type: "notedelete",
        note
    }
)

export {deleteNote}