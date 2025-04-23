import React from "react";
function Form() {
    return (
        <div
            style={{
                width: "400px",
                margin: "0 auto",
                fontFamily: "Arial, sans-serif",
            }}
        >
            <h2>Novell Services Login</h2>
            <form>
                <table>
                    <tr>
                        <td>
                            <label>Username:</label>
                        </td>
                        <td>
                            <input type="text" name="username" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Password:</label>{" "}
                        </td>{" "}
                        <td>
                            <input type="password" name="password" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>City of Employment:</label>
                        </td>{" "}
                        <td>
                            <input type="text" name="city" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Web server:</label>
                        </td>{" "}
                        <td>
                            <select>
                                <option>-- Choose a server --</option>
                                <option>Server 1</option>
                                <option>Server 2</option>
                                <option>Server 3</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Please specify your role:</label>
                            <br />
                        </td>
                        <td>
                            <input type="radio" name="role" value="admin" /> Admin <br />
                            <input type="radio" name="role" value="engineer" /> Engineer{" "}
                            <br />
                            <input type="radio" name="role" value="manager" /> Manager <br />
                            <input type="radio" name="role" value="guest" /> Guest <br />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Single Sign-on to the following:</label>
                            <br />
                        </td>
                        <td>
                            <input type="checkbox" name="sso" value="mail" /> Mail <br />
                            <input type="checkbox" name="sso" value="payroll" /> Payroll{" "}
                            <br />
                            <input type="checkbox" name="sso" value="selfservice" />{" "}
                            Self-service <br />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div style={{ marginTop: "10px" }}>
                                <button type="submit">Login</button>
                                <button type="reset" style={{ marginLeft: "10px" }}>
                                    Reset
                                </button>
                            </div>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    );
}
export default Form;