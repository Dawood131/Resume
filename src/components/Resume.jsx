import React, { useRef } from "react";
import {
  FaPhoneAlt, FaEnvelope, FaLinkedin, FaMapMarkerAlt,
  FaBirthdayCake, FaFlag, FaUser, FaGlobe
} from "react-icons/fa";
import { PiBicycleDuotone } from "react-icons/pi";
import { TbSwimming } from "react-icons/tb";
import { RiBookLine } from "react-icons/ri";
import { GiShuttlecock } from "react-icons/gi";
import resumeData from "../data/resumeData";
import profilePic from "../assets/profile.png";

const ResumePage = () => {
  const pageRef = useRef();

  const bulletClass =
    "relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:rounded-full before:bg-pink-600";

  return (
    <div className="flex flex-col items-center min-h-screen py-2 font-poppins">
      <div ref={pageRef} className="w-[230mm] bg-white shadow-lg p-7 relative">

        <style>
          {`
            @media print {
              .page-break { 
                display: block; 
                page-break-before: always; 
              }
            }
          `}
        </style>

        <div className="flex flex-wrap gap-6">
          {/* LEFT COLUMN */}
          <div className="flex-[0.5] flex flex-col items-center gap-4 text-[11px] ml-2">
            <img src={profilePic} alt="profile" className="w-52 h-52 rounded-full object-cover border-2 border-gray-200 mt-8 -ml-2" />

            {/* CONTACT */}
            {resumeData.personal && (
              <div className="w-full">
                <h4 className="font-semibold text-gray-800 mb-2 mt-3 text-[21px]">CONTACT</h4>
                <div className="space-y-1">
                  {resumeData.personal.phone && <div className="flex items-center gap-2"><FaPhoneAlt className="text-pink-500" /> {resumeData.personal.phone}</div>}
                  {resumeData.personal.email && <div className="flex items-center gap-2"><FaEnvelope className="text-pink-500" /> {resumeData.personal.email}</div>}
                  {resumeData.personal.linkedin && <div className="flex items-center gap-2"><FaLinkedin className="text-pink-500" /> {resumeData.personal.linkedin}</div>}
                  {resumeData.personal.location && <div className="flex items-center gap-2"><FaMapMarkerAlt className="text-pink-500" /> {resumeData.personal.location}</div>}
                  {resumeData.personal.dob && <div className="flex items-center gap-2"><FaBirthdayCake className="text-pink-500" /> {resumeData.personal.dob}</div>}
                  {resumeData.personal.nationality && <div className="flex items-center gap-2"><FaFlag className="text-pink-500" /> {resumeData.personal.nationality}</div>}
                  {resumeData.personal.maritalStatus && <div className="flex items-center gap-2"><FaUser className="text-pink-500" /> {resumeData.personal.maritalStatus}</div>}
                </div>
              </div>
            )}

            {/* PORTFOLIO */}
            {resumeData.personal?.website && (
              <div className="w-full">
                <h4 className="font-semibold text-gray-800 mb-2 mt-4 text-[21px]">PORTFOLIO - WEBSITE LINK</h4>
                <div className="flex items-center gap-2">
                  <FaGlobe className="text-gray-400" />
                  <a href={resumeData.personal.website} target="_blank" rel="noreferrer" className="text-blue-600 text-sm">{resumeData.personal.website}</a>
                </div>
              </div>
            )}

            {/* EDUCATION */}
            {resumeData.education?.length > 0 && (
              <div className="w-full">
                <h4 className="font-semibold text-gray-800 mb-2 mt-4 text-[21px]">EDUCATION</h4>
                {resumeData.education.map((edu, i) => (
                  <div key={i} className="mb-2">
                    <div className="font-semibold text-[14px] text-gray-800">{edu.degree}</div>
                    <div className="text-sm text-gray-600">{edu.institution}</div>
                    <div className="text-sm text-gray-600">{edu.country}</div>
                    <div className="text-xs text-gray-500">{edu.year}</div>
                  </div>
                ))}
              </div>
            )}

            {/* CORE SKILLS */}
            {resumeData.skills?.length > 0 && (
              <div className="w-full">
                <h4 className="font-semibold text-gray-800 mb-2 mt-4 text-[21px]">CORE SKILLS</h4>
                <ul className="pl-4 space-y-1">{resumeData.skills.map((s, i) => (<li key={i} className={bulletClass}>{s}</li>))}</ul>
              </div>
            )}

            {/* AWARDS */}
            {resumeData.awards?.length > 0 && (
              <div className="w-full">
                <h4 className="font-semibold text-gray-800 mb-2 mt-4 text-[21px]">AWARDS & ACHIEVEMENTS</h4>
                <ul className="pl-4 space-y-1">{resumeData.awards.map((a, i) => (<li key={i} className={bulletClass}>{a}</li>))}</ul>
              </div>
            )}

            {/* LANGUAGES */}
            {resumeData.languages?.length > 0 && (
              <div className="w-full -mt-3 mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 mt-4 text-[21px]">LANGUAGES</h4>
                <div className="space-y-1">
                  {resumeData.languages.map((l, i) => {
                    const levels = ["Beginner", "Intermediate", "Fluent"];
                    return (
                      <div key={i} className="flex flex-col">
                        <div className="font-bold text-sm text-gray-900 mb-1">{l.name}</div>
                        <div className="flex gap-6 items-center">
                          {levels.map((level) => (
                            <div key={level} className="flex items-center gap-1">
                              <span className="w-3 h-3 rounded-full border border-gray-800 flex items-center justify-center">
                                {l.level === level && <span className="w-2 h-2 bg-pink-600 rounded-full"></span>}
                              </span>
                              <span className="text-xs text-gray-800">{level}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* TOOLS */}
            {resumeData.tools?.length > 0 && (
              <div className="w-full mt-2">
                <h4 className="font-semibold text-gray-800 mb-2 mt-4 text-[21px]">TOOLS AND SOFTWARE</h4>
                <ul className="pl-4 space-y-1">{resumeData.tools.map((t, i) => (<li key={i} className={bulletClass}>{t}</li>))}</ul>
              </div>
            )}

            {/* DEVELOPMENT */}
            {resumeData.development?.length > 0 && (
              <div className="w-full mt-2">
                <h4 className="font-semibold text-gray-800 mb-2 mt-4 text-[21px]">PROFESSIONAL DEVELOPMENT</h4>
                <ul className="pl-4 space-y-1">{resumeData.development.map((d, i) => (<li key={i} className={bulletClass}>{d}</li>))}</ul>
              </div>
            )}

            {/* CERTIFICATES */}
            {resumeData.certificates?.length > 0 && (
              <div className="w-full mt-2">
                <h4 className="font-semibold text-gray-800 mb-2 mt-4 text-[21px]">CERTIFICATES</h4>
                {resumeData.certificates.map((c, i) => (
                  <div key={i} className="mb-2 text-xs">
                    <div className="font-semibold">{c.title} — {c.org} ({c.year})</div>
                    {c.link && <div><a href={c.link} target="_blank" rel="noreferrer" className="text-blue-600 text-sm">{c.link}</a></div>}
                    <div className="text-gray-400">{c.code}</div>
                  </div>
                ))}
              </div>
            )}

            {/* HOBBIES */}
            {resumeData.hobbies?.length > 0 && (
              <div className="w-full mt-2">
                <h4 className="font-semibold text-gray-800 mb-2 mt-2 text-[21px]">HOBBIES</h4>
                <ul className="space-y-2">
                  {resumeData.hobbies.map((hobby, i) => {
                    const hobbyIcons = [<RiBookLine size={15} />, <TbSwimming size={15} />, <PiBicycleDuotone size={15} />, <GiShuttlecock size={15} />];
                    return (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <span className="text-pink-600">{hobbyIcons[i] || <GiShuttlecock />}</span>
                        <span>{hobby}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex-[0.95] flex flex-col gap-3 -ml-3 text-[10.4px] ">
            <div>
              <div className="text-5xl font-bold text-gray-800">{resumeData.personal?.name?.toUpperCase()}</div>
              <div className="text-xl font-semibold text-gray-800  italic mb-1">{resumeData.personal?.title}</div>
            </div>
            {resumeData.summary && <div className="space-y-1 text-[11px] mb-2">{resumeData.summary}</div>}

            {/* EXPERIENCE + INTERNSHIPS (Combined Timeline) */}
            {(resumeData.experience?.length > 0 || resumeData.internships?.length > 0) && (
              <div className="relative -mt-2">
                <h4 className="font-semibold text-gray-800 mb- text-xl">PROFESSIONAL EXPERIENCE</h4>

                {/* One Single Vertical Timeline Line */}
                <div className="absolute left-[7px] top-10 bottom-2 w-0.5 bg-pink-600"></div>

                {/* Merge Both Arrays */}
                {[...(resumeData.experience || []), ...(resumeData.internships || [])].map((item, i) => (
                  <div key={i} className="relative flex items-start mb-6">
                    {/* Dot */}
                    <span className="absolute left-0 mt-1 w-4 h-4 border-2 border-pink-600 rounded-full bg-white"></span>

                    <div className="ml-7">
                      <div className="font-bold text-[14px] tracking-wider text-gray-800 ">
                        {item.role}
                      </div>

                      <div className="text-xs text-gray-600 font-semibold mb-1">
                        {item.org} • {item.date}
                      </div>

                      <ul className="pl-1 -mb-3">
                        {item.bullets?.map((b, ii) => (
                          <li key={ii} className={bulletClass}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            )}


          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
