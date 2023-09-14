"use client";
import {useState} from 'react'
import { DropdownMenu, Button } from "@radix-ui/themes";
import { MenuAnimation } from "ui";

type Props = {};

const DropDown = (props: Props) => {

  

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
          <MenuAnimation/>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item shortcut="⌘ E">Resume</DropdownMenu.Item>
        <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export { DropDown };
