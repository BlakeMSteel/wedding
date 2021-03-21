import React, { useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { people, familyUnits } from "../people";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
} from "@material-ui/core";

export default function RSVP() {
    const [selectedFamily, setSelectedFamily] = useState();

    function changePerson(newPerson) {
        if (newPerson) {
            familyUnits.forEach((familyUnit) => {
                if (familyUnit.containsPersonWithName(newPerson.name)) {
                    setSelectedFamily(familyUnit);
                }
            });
        } else {
            setSelectedFamily(undefined);
        }
    }

    return (
        <>
            <Autocomplete
                id="person-selector"
                style={{ width: 300 }}
                options={people}
                autoHighlight
                getOptionLabel={(option) => option.name}
                onChange={(_, newPerson) => {
                    changePerson(newPerson);
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Your name"
                        variant="outlined"
                    />
                )}
            />
            {selectedFamily ? (
                <FamilyDisplay selectedFamily={selectedFamily} />
            ) : (
                <></>
            )}
        </>
    );
}

function FamilyDisplay(props) {
    const { selectedFamily } = props;
    const familyMembers = selectedFamily.people;

    function FamilyMemberRow(props) {
        const { familyMember } = props;
        return (
            <TableRow key={familyMember.name}>
                <TableCell component="th" scope="row">
                    {familyMember.name}
                </TableCell>
                <TableCell align="right">
                    {familyMember.attending ? "Yes" : "No"}
                </TableCell>
                <TableCell align="right">
                    {familyMember.dietRestriction}
                </TableCell>
                <TableCell align="right">
                    {familyMember.drinking ? "Yes" : "No"}
                </TableCell>
            </TableRow>
        );
    }

    return (
        <TableContainer component={Paper}>
            <Table className="family-table" aria-label="simple table">
                <TableHead>
                    <TableCell>Family Member</TableCell>
                    <TableCell align="right">Attending?</TableCell>
                    <TableCell align="right">Dietary Restrictions</TableCell>
                    <TableCell align="right">Drinking?</TableCell>
                </TableHead>
                <TableBody>
                    {familyMembers.map((familyMember) => (
                        <FamilyMemberRow familyMember={familyMember} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
