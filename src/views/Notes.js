import React from "react";
import styled from "styled-components";
import Note from "components/organisms/Note";

const Wrapper = styled.div`
  padding: 3rem;
`;

const List = styled.div`
  padding: 5rem;
  //border: 1px solid white;
  display: grid;
  grid-gap: 5rem;
  justify-items: center;
  
  @media (min-width: 640px) {
    grid-template-columns: 1fr;
  }
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
    
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
  
  @media (min-width: 1280px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const Notes = () => {
    const notes = [
        {
            _id: 1,
            user: "valejzy",
            content: "przejebane życie"
        },
        {
            _id: 2,
            user: "szymek",
            content: "magik za dwa lata"
        },
        {
            _id: 3,
            user: "teski",
            content: "kocham kamerzyste"
        },
        {
            _id: 4,
            user: "marchwj",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum justo libero, tempor ut dolor vitae, consequat volutpat lorem. Duis congue quam rhoncus nunc tincidunt, accumsan venenatis urna aliquam. Suspendisse potenti. Aliquam in pretium dolor. Ut at porttitor odio, at feugiat diam. Fusce tempor at magna quis pretium. Suspendisse potenti. Ut fringilla lectus sit amet erat fringilla, vitae tempus ligula malesuada. Donec tincidunt scelerisque tellus. Integer dapibus, nulla a vehicula ultricies, elit nibh fringilla erat, id rutrum nulla quam et velit. Morbi quis finibus metus, et sodales eros. Maecenas imperdiet tortor quis lacus placerat, sit amet viverra augue consequat. Curabitur non nisl eget sapien rutrum pretium. Aenean orci elit, volutpat eu arcu ut, porta sodales sapien. Aenean ut vehicula mauris. Cras facilisis leo augue, ut dictum urna lobortis eget."
        },
        {
            _id: 5,
            user: "emes",
            content: "pojadłem 1000 kcal"
        }
    ];
    const notesList = notes.length ? (
        notes.map((notes)=>{
            return (
                <Note key={notes._id} notes={notes}/>
            )
        })
    ) : (
        <span>No notes</span>
    );

    return (
        <Wrapper>
            <List>
                {notesList}
            </List>
        </Wrapper>
    )
};

export default Notes;
