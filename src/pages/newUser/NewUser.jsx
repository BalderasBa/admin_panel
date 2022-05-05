import "./newUser.css";

export default function Newuser() {
  return (
    <div className="newuser">
      <h1 className="newuser-title">New User</h1>
      <form className="newuser-form">
        <div className="newuser-item">
          <label htmlFor="">User Name</label>
          <input type="text" placeholder="yehal" />
        </div>
        <div className="newuser-item">
          <label htmlFor="">Full Name</label>
          <input type="text" placeholder="Yehya Hallousse" />
        </div>
        <div className="newuser-item">
          <label htmlFor="">Email</label>
          <input type="email" placeholder="yehyahallousse@gmail.dz" />
        </div>
        <div className="newuser-item">
          <label htmlFor="">Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newuser-item">
          <label htmlFor="">Phone Number</label>
          <input type="text" placeholder="+123 456 678 90" />
        </div>
        <div className="newuser-item">
          <label htmlFor="">Adress</label>
          <input type="text" placeholder="90 Street city" />
        </div>
        <div className="newuser-item">
          <label htmlFor="">Gender</label>
          <div className="newuser-gender">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div className="newuser-item">
          <label htmlFor="">Active</label>
          <select name="active" id="active" className="newuser-select">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newuser-Btn">Create</button>
      </form>
    </div>
  );
}
