import React, { useState } from 'react';
import OutlineButton from "./OutlineButton";
import { useTranslation } from "react-i18next";
import { PageHeader } from "../Common";
import { ParagraphTitle, ParagraphText } from "../Common"
import { Link } from 'react-router-dom';

function ProjectModal({ isOpen, onClose, project }) {
    const { t, i18n } = useTranslation();
    const [selectedTab, setSelectedTab] = useState('overview');

    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';

    if (!isOpen || !project) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto h-full w-full flex justify-center items-center">
            <div className="bg-white p-8 rounded-sm shadow-md mx-auto h-[95vh] max-w-[80vw] overflow-scroll flex flex-col justify-between">
                <div>
                    <div className="flex  justify-between items-center mb-6">
                        <h1 className="text-4xl font-bold">{project.name}</h1>
                        <button onClick={onClose} className="text-lg font-semibold cursor-pointer">✕</button>
                    </div>
                    <p className="text-lg text-gray-600">March 2024 - July 2024</p>
                    <p className="text-lg mb-4">{project.duration}</p>
                    <div className="block gap-4 mb-8">
                        <OutlineButton>
                            Github
                        </OutlineButton>
                        <OutlineButton>
                            Case Study
                        </OutlineButton>
                    </div>
                    {selectedTab === 'overview' && (
                        <div id='overview'>

                            <div className="mb-8">
                                <ParagraphTitle className="text-[1.25rem] ">
                                    ABOUT THE NON-PROFIT
                                </ParagraphTitle>
                                <p className="text-lg mb-4">{project.nonProfitDescription}</p>
                                <ParagraphTitle className="text-[1.25rem] ">
                                    OUR PROJECT
                                </ParagraphTitle>
                                <p className="text-lg mb-4">{project.projectDescription}</p>
                            </div>
                            <div className="mb-8">
                                <p className="text-lg italic mt-4">{project.additionalNote}</p>
                            </div>
                        </div>
                    )}
                    {selectedTab === 'team' && (
                        <div id='team' className='pr-5'>
                            <div className="flex justify-between items-start">
                            </div>
                            <div className="mt-4 flex space-x-4">
                            </div>
                            <hr className="my-6 border-gray-300" />
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-900">LEADS</h2>
                                <div className="mt-4 space-y-4">
                                    <div className="flex justify-between items-center">
                                        <p className="text-lg text-gray-800">FirstName LastName</p>
                                        <p className="text-lg text-gray-600">Role Title (long)</p>
                                        <Link className="text-blue-600 hover:underline" href="#">
                                            LinkedIn
                                        </Link>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-lg text-gray-800">FirstName LastName</p>
                                        <p className="text-lg text-gray-600">Role Title (long)</p>
                                        <Link className="text-blue-600 hover:underline" href="#">
                                            LinkedIn
                                        </Link>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-lg text-gray-800">FirstName LastName</p>
                                        <p className="text-lg text-gray-600">Role Title (long)</p>
                                        <Link className="text-blue-600 hover:underline" href="#">
                                            LinkedIn
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-900">DESIGNERS</h2>
                                <div className="mt-4 grid grid-cols-2 gap-4">
                                    <div className="flex justify-between items-center">
                                        <p className="text-lg text-gray-800">FirstName LastName</p>
                                        <Link className="text-blue-600 hover:underline" href="#">
                                            LinkedIn
                                        </Link>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-lg text-gray-800">FirstName LastName</p>
                                        <Link className="text-blue-600 hover:underline" href="#">
                                            LinkedIn
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-900">DEVELOPERS</h2>
                                <div className="mt-4 grid grid-cols-2 gap-4">
                                    <div className="flex justify-between items-center">
                                        <p className="text-lg text-gray-800">FirstName LastName</p>
                                        <Link className="text-blue-600 hover:underline" href="#">
                                            LinkedIn
                                        </Link>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-lg text-gray-800">FirstName LastName</p>
                                        <Link className="text-blue-600 hover:underline" href="#">
                                            LinkedIn
                                        </Link>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-lg text-gray-800">FirstName LastName</p>
                                        <Link className="text-blue-600 hover:underline" href="#">
                                            LinkedIn
                                        </Link>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-lg text-gray-800">FirstName LastName</p>
                                        <Link className="text-blue-600 hover:underline" href="#">
                                            LinkedIn
                                        </Link>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-lg text-gray-800">FirstName LastName</p>
                                        <Link className="text-blue-600 hover:underline" href="#">
                                            LinkedIn
                                        </Link>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-lg text-gray-800">FirstName LastName</p>
                                        <Link className="text-blue-600 hover:underline" href="#">
                                            LinkedIn
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )}
                </div>
                <div className="flex gap-4 border-t pt-4">
                    <button
                        onClick={() => setSelectedTab('overview')}
                        className={`font-bold py-2 px-4 ${selectedTab === 'overview' ? 'text-blue-500' : 'text-gray-700'}`}
                    >
                        Overview
                    </button>
                    <button
                        onClick={() => setSelectedTab('team')}
                        className={`font-bold py-2 px-4 ${selectedTab === 'team' ? 'text-blue-500' : 'text-gray-700'}`}
                    >
                        Team
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProjectModal;
