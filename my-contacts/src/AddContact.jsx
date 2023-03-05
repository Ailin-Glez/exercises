function AddContact({ handleSubmit, cancel }) {
    return (
        <form onSubmit={handleSubmit} className="add-contact-container">
            <label htmlFor="name">Name</label>
            <input type="text" id="name"/>
            <label htmlFor="phone">Phone</label>
            <input type="number" id="phone"/>
            <label htmlFor="address">Address</label>
            <input type="text" id="address"/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email"/>
            <button type="submit">Add Contact</button>
            <button onClick={cancel}>Cancel</button>
        </form>
    );
}

export default AddContact;