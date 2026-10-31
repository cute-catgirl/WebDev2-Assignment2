/*
SearchBox.tsx
Mae Moon
27 Oct 2026

A simple SearchBox component used to search for students. Takes in the current searchQuery and an onChange callback.
Doesn't handle any search logic or filtering itself - this is done in StudentPortal.
*/
"use client"
import { ChangeEventHandler } from "react";

export default function SearchBox({ searchQuery, onChange }: { searchQuery: string, onChange: ChangeEventHandler }) {
    return (<div>
        <input type="text" placeholder="Search" value={searchQuery} onChange={onChange} className="p-1 border rounded-lg outline-black focus:outline" />
    </div>);
}