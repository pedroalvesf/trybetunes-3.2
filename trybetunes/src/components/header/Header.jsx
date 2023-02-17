import avatarTest from '/Users/pedro.alves.hf/Documents/trybetunes-3.2/trybetunes/src/assets/luffyAvatar.jpeg'
import { SidebarData } from '../navbar/NavbarData';
import { Link } from 'react-router-dom';
import searchAlbumsAPI from "/Users/pedro.alves.hf/Documents/trybetunes-3.2/trybetunes/src/services/searchAlbumApi.js";
import { useEffect, useState } from "react";

function Header({ state, setState}) {

  const [artistName, setArtistName] = useState('');
  const handleChange = ({ target }) => {
    setArtistName(target.value);
  };

  const handleClick = async (x) => {
    x.preventDefault();
    const newArtist = await searchAlbumsAPI(artistName);
    setState(newArtist);
    setArtistName('');
  };

  return (
    <>
      <div className='
      flex
      flex-row
      min-w-lg
      '>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn
      btn-ghost
      max-w-min
      ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  {SidebarData.map((item, index) => {
                    return (
                      <li key={index} className="
                      p-0
                      hover:bg-base-100
                      " >
                        <Link to={item.path}
                        className='
                        px-2
                        py-3
                        mt-1
                        h-full
                        w-full
                        '
                        >
                          {item.icon}
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    )
                  })}
              </ul>
            </div>

          </div>
          <div className="
        navbar bg-base-100
        flex
        flex-row
        justify-between
        ">
            <div className="
            navbar-center
            ">
              <a className="btn btn-ghost normal-case text-xl ">Trybetunes</a>
            </div>
            <div className="gap-2
            flex
            flex-row
            ">
              <div className="form-control">
                <input type="text" placeholder="Search"
                name="artistName"
                className="input input-bordered
                "
                onChange={handleChange}
                value={artistName}
                />
              </div>
              <button
              onClick={handleClick}
              type="submit"
              className="
              btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-16 rounded-full">
                    <img src={avatarTest}
                    className='hidden md:flex
                    '
                    />
                  </div>
                </label>
                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li><a>Settings</a></li>
                  <li><a>Logout</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;