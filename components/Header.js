import React from "react";
import { signOut } from "next-auth/react"

const Header = (session) => {
	// console.log(session)
	return (
		<div className="bg-slate-500 h-12 py-2 flex justify-between">
			<h2 className="text-slate-200 text-xl font-semibold uppercase pl-4">Contact Manager</h2>
			<div className="text-slate-200 text-xl px-2 flex gap-4">
			<h3>Hi, {session.session.Session.user.name}</h3>
			<button className="w-24 rounded-full text-white text-sm transition-colors duration-150 bg-slate-600 focus:shadow-outline hover:bg-slate-700" onClick={() => signOut()}>Sign Out</button>
			</div>
		</div>
	);
};

export default Header;