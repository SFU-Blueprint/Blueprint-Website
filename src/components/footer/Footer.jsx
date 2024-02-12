import React, { useState } from "react";
import {useTranslation} from "react-i18next";
import AnchorList from "./AnchorList";
import IconButton from "./IconButton";
import Logo from "../Shared/Logo";
import './Footer.css'

const Footer = () => {
    const {t} = useTranslation()
    return (
        <footer className="inset-x-0 bottom-0 h-fit p-14 bg-blueprint-blue text-white">
            <div className="page-links">
                {
                    t("pages").map((page)=>{
                        return (
                            (t(`${page}.anchors`) !== (page + '.anchors'))
                            && <AnchorList page={page}></AnchorList>
                        )
                    })
                }
                <div className="connect-container">
                    <div className="text-xl mb-6 font-semibold">{t('connect.name')}</div>
                    <div className="icons-container">
                        {
                            t('connect.links').map((id)=><IconButton id={id} key={id}></IconButton>)
                        }
                    </div>
                </div>
            </div>
            <hr className="my-8"/>
            <div className="flex justify-between text-xs items-center">
                <Logo colour="white"></Logo>
                <div>{t('common.blueprint')}</div>
                <div className="flex gap-4">
                    <div className="text-hover">{t('common.terms')}</div>
                    <div className="text-hover">{t('common.privacy')}</div>
                    <div className="text-hover">{t('common.cookies')}</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;