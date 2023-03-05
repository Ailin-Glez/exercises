function Contact({ contacts }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Email</th>
                </tr>
            </thead>
            {contacts.map(contact => {
                return (
                <tbody>
                    <tr>
                        <td>{contact.name}</td>
                        <td>{contact.phone}</td>
                        <td>{contact.address}</td>
                        <td>{contact.email}</td>
                    </tr>
                </tbody>
                )
            })}
        </table>
    );
}

export default Contact;