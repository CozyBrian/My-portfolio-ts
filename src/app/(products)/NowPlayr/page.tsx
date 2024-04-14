import { NowPlayrIcon } from "@/assets/images/products";
import {
  NPShot1,
  NPShot2,
  PlayerShot,
  SettingsShot,
} from "@/assets/images/products/nowPlayr";
import GithubButton from "@/components/miscellanous/githubButton";
import { ArrowDown } from "iconsax-react";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Brian Newton | NowPlayr",
  description:
    "The beautiful, sleek, open-source music preview for macOS. Your music, at a glance.",
  themeColor: "#060D14",
};

export default function Component() {
  return (
    <>
      <section className="h-[680px] w-full md:w-[880px] flex flex-col justify-center">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="flex items-center flex-col gap-6">
            <Image src={NowPlayrIcon} className="w-32 h-32" alt="nowPlayr" />
            <div className="space-y-3">
              <h1 className="text-tesla-100 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                NowPlayr
              </h1>
              <p className="mx-auto max-w-[600px] text-tesla-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The beautiful, sleek, open-source music preview for macOS. Your
                music, at a glance.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <div className="flex flex-row opacity-0">
                <GithubButton href="https://github.com/CozyBrian/NowPlayr" />
              </div>
              <div>
                <a
                  href="https://firebasestorage.googleapis.com/v0/b/my-portfolio-35b84.appspot.com/o/products%2FNowPlayr.dmg?alt=media&token=ffedaacb-5c29-460d-a6a6-672105c6b466"
                  download="NowPlayr.dmg"
                  className="bg-tesla-800 space-x-2 inline-flex items-center justify-center h-11 hover:shadow-tesla-sm hover:-translate-y-0.5 outline outline-1 outline-transparent hover:outline-tesla-400 active:translate-y-0.5 shadow-tesla-800 text-cozy-airBlue hover:text-tesla-300 font-medium px-4 py-2 rounded-lg duration-200"
                >
                  <p>Download for macOS</p>
                  <ArrowDown />
                </a>
                <p className="text-xs text-cozy-airBlue/50 mt-4">
                  Requires macOS 14 or later.
                </p>
              </div>
              <GithubButton href="https://github.com/CozyBrian/NowPlayr" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-tesla-800 md:min-h-[600px] mb-32 w-full flex flex-row justify-center items-center">
        <div className="w-screen md:w-[880px] md:min-h-[600px] py-14 flex flex-col gap-8">
          <h2 className="px-4 md:px-0 text-tesla-text text-3xl font-semibold tracking-wide uppercase">
            Now Playing View
          </h2>
          <p className="px-4 md:px-0 text-tesla-text">
            NowPlayr&apos;s non-intrusive banner appears whenever your music
            changes, showing the currently playing song and allowing you to
            focus on your work without missing a beat.
          </p>
          <div className="flex flex-col md:grid md:grid-cols-2 w-full gap-8 px-4 md:px-0">
            <div className="flex flex-col gap-2 items-center">
              <Image
                src={NPShot1}
                alt="nowPlayingShot1"
                className="rounded-xl"
              />
            </div>
            <div className="flex flex-col gap-2 items-center">
              <Image
                src={NPShot2}
                alt="nowPlayingShot2"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-tesla-800 md:min-h-[600px] mb-32 w-full flex flex-row justify-center items-center">
        <div className="w-screen md:w-[880px] md:min-h-[600px] py-14 flex flex-col md:flex-row items-center gap-8">
          <div className="flex flex-col gap-8 max-w-[430px]">
            <h2 className="px-4 md:px-0 text-tesla-text text-3xl font-medium tracking-wide uppercase">
              Player View
            </h2>
            <p className="px-4 md:px-0 text-tesla-text leading-7">
              Access your music from anywhere on your Mac with the NowPlayr
              floating player. Control playback, switch songs, and see
              what&apos;s playing without leaving your current app.
            </p>
          </div>
          <div className="flex flex-col w-full gap-8 px-4 md:px-0">
            <div className="flex flex-col gap-2 items-center">
              <Image
                src={PlayerShot}
                alt="nowPlayingShot1"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-tesla-800 md:min-h-[600px] mb-32 w-full flex flex-row justify-center items-center">
        <div className="w-screen md:w-[880px] md:min-h-[600px] py-14 flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="flex flex-col w-full gap-8 px-4 md:px-0">
            <div className="flex flex-col gap-2 items-center">
              <Image
                src={SettingsShot}
                alt="nowPlayingShot1"
                className="rounded-xl"
              />
            </div>
          </div>
          <div className="flex flex-col gap-8 max-w-[430px]">
            <h2 className="px-4 md:px-0 text-tesla-text text-3xl font-medium tracking-wide uppercase">
              Multi-app support
            </h2>
            <p className="px-4 md:px-0 text-tesla-text leading-7">
              NowPlayr offers an easy method to manage music playback for
              Spotify and Apple Music, displaying the currently playing track
              with the Now Playing Window or controling play back with the
              floating player.
            </p>
          </div>
        </div>
      </section>
      <div className="container flex flex-col md:flex-row items-center justify-center gap-8 px-4 text-center md:px-6 mb-32">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter text-tesla-100 sm:text-4xl md:text-5xl">
            Download NowPlayr
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-400 md:text-lg lg:text-base">
            Download the latest version of NowPlayr for macOS. Requires macOS 14
            or later.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <a
            href="https://firebasestorage.googleapis.com/v0/b/my-portfolio-35b84.appspot.com/o/products%2FNowPlayr.dmg?alt=media&token=ffedaacb-5c29-460d-a6a6-672105c6b466"
            download="NowPlayr.dmg"
            className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 bg-gray-50 text-gray-900 hover:bg-gray-50/90 focus-visible:ring-gray-300"
          >
            Download for macOS
          </a>
        </div>
      </div>
    </>
  );
}
