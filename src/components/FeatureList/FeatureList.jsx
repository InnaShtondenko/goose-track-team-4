import React from 'react';

import {
  List,
  ListItem,
  ListDescriptionHolder,
  ListNumber,
  ListEmphasize,
  ListText,
  ListDescription,
  ListImg,
} from './FeatureList.styled';

import CalendarImg from './CalendarImg3.png';
import SidebarImg from './SidebarImg3.png';
import AllInImg from './AllInImg3.png';

function FeatureList() {
  return (
    <div>
      {/* <h2>Hidden Features</h2> */}
      <List>
        <ListItem>
          <ListDescriptionHolder>
            <ListNumber>1.</ListNumber>
            <ListEmphasize>Calendar</ListEmphasize>
            <ListText>view</ListText>
            <ListDescription>
              GooseTrack's Calendar view provides a comprehensive overview of
              your schedule, displaying all your tasks, events, and appointments
              in a visually appealing and intuitive layout.
            </ListDescription>
          </ListDescriptionHolder>
          <ListImg src={CalendarImg} alt="calendar preview"></ListImg>
        </ListItem>
        <ListItem>
          <ListDescriptionHolder>
            <ListNumber>2.</ListNumber>
            <ListText>SIDEBAR</ListText>
            <ListDescription>
              GooseTrack offers easy access to your account settings, calendar,
              and filters. The "My Account" section allows you to manage your
              profile information and preferences, while the calendar provides a
              quick and convenient way to view your upcoming events and tasks.
            </ListDescription>
          </ListDescriptionHolder>
          <ListImg src={SidebarImg} alt="sidebar preview"></ListImg>
        </ListItem>
        <ListItem>
          <ListDescriptionHolder>
            <ListNumber>3.</ListNumber>
            <ListEmphasize>all in</ListEmphasize>
            <ListText>one</ListText>
            <ListDescription>
              GooseTrack is an all-in-one productivity tool that helps you stay
              on top of your tasks, events, and deadlines. Say goodbye to
              scattered to-do lists and hello to streamlined productivity with
              GooseTrack.
            </ListDescription>
          </ListDescriptionHolder>
          <ListImg src={AllInImg} alt="all in preview"></ListImg>
        </ListItem>
      </List>
    </div>
  );
}

export default FeatureList;
