import React, { useEffect, useState } from "react";
import { Avatar, ListItemText, ListItemAvatar, ListItem, List } from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import BuildIcon from '@mui/icons-material/Build';

const SeviceProcess = () => {
    return (
        <List >
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ width: 45, height: 45 }}>
                        <ContactPhoneIcon  sx={{ fontSize: 35 }}/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="Taleplerinizi iletin"
                    secondary='Telefon veya e-posta ile arızayı ve konumu paylaşın.'
                />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ width: 45, height: 45 }}>
                        <LocalOfferIcon sx={{ fontSize: 35 }}/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="Ekspertiz & Teklif"
                    secondary='Yerinde keşif sonrası kalem kalem fiyatlandırma yapılır.'
                />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ width: 45, height: 45 }}>
                        <BuildIcon sx={{ fontSize: 35 }}/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="Onarım & Teslim"
                    secondary='Onay ile birlikte onarım/kurulum yapılır, teslim ve garanti verilir.'
                />
            </ListItem>
        </List>
    );
}
export default SeviceProcess;