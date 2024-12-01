"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import Details from "./Details";
import React from 'react';
import { techList } from "../data/data";

export default function About() {
  return (
    <div className="w-full h-fit flex items-center justify-center mb-[3vh] sm:mb-[10vh] ">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-4 p-6 h-fit lg:max-h-[35rem] max-w-[75rem]">
        <Details />
        <div className="hidden sm:flex flex-col h-full w-full max-w-[600px] gap-12 lg:gap-4">
          <div className="flex h-[270px] w-full shadow-sm shadow-white/70 border-t border-white/70 text-white overflow-hidden px-2 bg-purple-950/20 rounded-lg">
            <div className="flex flex-col h-full flex-grow max-w-[240px] justify-center items-start leading-loose tracking-wider pl-3">
              <h1 className="w-fit text-2xl text-left font-bold">
                My
              </h1>
              <h1 className="w-fit text-4xl text-left font-bold text-purple-300">
                Tech Stack
              </h1>
            </div>
            <div className="flex flex-grow h-full gap-x-2">
              <InfiniteMovingCards items={techList} speed="normal" direction="right" />
              <InfiniteMovingCards items={techList} speed="normal" direction="left" />
            </div>
          </div>
          <div className="flex items-center justify-center w-full text-3xl font-bold h-[200px] shadow-sm text-white bg-purple-950/20 shadow-white/70 border-t border-white/70 rounded-lg p-4">
            <h1 className="w-full text-center">
              Tech Enthusiast With A Passion For <span className="text-purple-300">Development</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
