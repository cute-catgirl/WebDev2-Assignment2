/*
SearchBox.tsx
Mae Moon
27 Oct 2026
*/
"use client"
import { ChangeEventHandler } from "react";

export default function SearchBox({ searchQuery, onChange }: { searchQuery: string, onChange: ChangeEventHandler }) {
    return (<div>
        <input type="text" placeholder="Search" value={searchQuery} onChange={onChange} className="p-1 border rounded-lg outline-black focus:outline" />
    </div>);
}