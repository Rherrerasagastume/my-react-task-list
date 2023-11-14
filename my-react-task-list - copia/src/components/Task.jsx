import React, { useState, useEffect } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { Box, Textarea, Input, Button, Flex, Text } from "@chakra-ui/react";

const Task = (props) => {
  const [checked, setChecked] = useState(props.complete || false);
  const [isEditing, setEditing] = useState(false);
  const [editedName, setEditedName] = useState(props.name);
  const [editedDescription, setEditedDescription] = useState(props.description);

  useEffect(() => {
    setChecked(props.complete || false);
  }, [props.complete]);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
    if (props.isUpdated) {
      props.isUpdated(props.id, { name: editedName, description: editedDescription, complete: checked });
    }
  };

  const handleDelete = () => {
    console.log("Handle Delete");
    if (props.isDeleted) {
      props.isDeleted(props.id);
    }
  };

  return (
    <Flex
      p="2"
      mb="3"
      border="1px"
      borderColor="gray.300"
      rounded="md"
      alignItems="center"
      justifyContent="space-between"
      textAlign="center"
      width="70%"
      mx="auto"
    >
      <Flex alignItems="center">
        <input
          type="radio"
          checked={checked}
          onChange={() => {
            setChecked(!checked);
            if (props.isChecked) {
              props.isChecked(!checked);
            }
          }}
        />
        {isEditing ? (
          <>
            <Input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              mx="2"
            />
            <Textarea
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
          </>
        ) : (
          <Box textAlign="left">
            <Text htmlFor={props.name} as={checked ? "s" : ""} fontSize="lg" mb="2">
              {props.name}
            </Text>
            <Text>
              {props.description}
            </Text>
          </Box>
        )}
      </Flex>
      <Box>
        <Button mr="2" onClick={isEditing ? handleSave : handleEdit}>
          {isEditing ? "Save" : <FaEdit color="blue" />}
        </Button>
        <Button onClick={handleDelete}>
          <FaTrash color="red" />
        </Button>
      </Box>
    </Flex>
  );
};

export default Task;
