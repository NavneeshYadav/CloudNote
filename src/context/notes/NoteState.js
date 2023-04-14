import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = [
    {
      _id: "6437a0e0382fsdd1bfsd4776f2c7",
      user: "64378a1f0fd339ee73e22bca",
      title: "React Js",
      description: "Let's start the course",
      tag: "asjdsajd",
      date: "2023-04-13T06:27:44.503Z",
      __v: 0,
    },
    {
      _id: "6437a0e13sds82fd1badsf4776f2c9",
      user: "64378a1f0fd339ee73e22bca",
      title: "Node Js",
      description: "Go study for better future",
      tag: "asjdsajd",
      date: "2023-04-13T06:27:45.112Z",
      __v: 0,
    },
    {
      _id: "6437a0e1382sdsdfd1bf4sd776f2c9",
      user: "64378a1f0fd339ee73e22bca",
      title: "JS",
      description: "Best course of all time",
      tag: "asjdsajd",
      date: "2023-04-13T06:27:45.112Z",
      __v: 0,
    },
    {
      _id: "6437a0e138sdd2fd1bf4sd776f2c9",
      user: "64378a1f0fd339ee73e22bca",
      title: "Node Js",
      description: "Go study for better future",
      tag: "asjdsajd",
      date: "2023-04-13T06:27:45.112Z",
      __v: 0,
    },
    {
      _id: "6437a0e1382fsssddd1bf4776f2c9",
      user: "64378a1f0fd339ee73e22bca",
      title: "Node Js",
      description: "Go study for better future",
      tag: "asjdsajd",
      date: "2023-04-13T06:27:45.112Z",
      __v: 0,
    },
    {
      _id: "6437a0e1382sdsfd1bsdf4776f2c9",
      user: "64378a1f0fd339ee73e22bca",
      title: "Node Js",
      description: "Go study for better future",
      tag: "asjdsajd",
      date: "2023-04-13T06:27:45.112Z",
      __v: 0,
    },
    {
      _id: "6437a0e1382fd1bsssdf4776f2c9",
      user: "64378a1f0fd339ee73e22bca",
      title: "Node Js",
      description: "Go study for better future",
      tag: "asjdsajd",
      date: "2023-04-13T06:27:45.112Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);
  // Add a Note
  const addNote = (title, description, tag) => {
    // TODO: API Call
    console.log("Adding a new note");
    const note = {
      _id: "61322f119553781a8ca8d0e08",
      user: "6131dc5e3e4037cd4734a0664",
      title: title,
      description: description,
      tag: tag,
      date: "2021-09-03T14:20:09.668Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = (id) => {
    // TODO: API Call
    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  // Edit a Note
  const editNote = async(id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = response.json();

    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
