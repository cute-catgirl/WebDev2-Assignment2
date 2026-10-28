/*
SearchBox.tsx
Mae Moon
27 Oct 2026
*/
"use client"
import { ChangeEventHandler } from "react";

export default function SearchBox({ searchQuery, onChange }: { searchQuery: string, onChange: ChangeEventHandler }) {
    return (<div>
        <input type="text" value={searchQuery} onChange={onChange} />
    </div>);
}