import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Icon = ({ children }: {children: string}) => (
  <Text style={styles.icon}>{children}</Text>
);

export const Button = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setIsOpen(!isOpen)}
      >
        <Icon>add</Icon>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuButton}>
            <Icon>person_add</Icon>
            <Text style={styles.menuText}>Add Users</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton}>
            <Icon>description</Icon>
            <Text style={styles.menuText}>Documents</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton}>
            <Icon>settings</Icon>
            <Text style={styles.menuText}>Settings</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#2196F3",
    alignItems: "center",
    justifyContent: "center",
  },
  menu: {
    position: "absolute",
    top: 70,
    right: 0,
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    padding: 8,
    elevation: 2,
  },
  menuButton: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  menuText: {
    marginLeft: 8,
  },
  icon: {
    color: "#FFFFFF",
    fontSize: 24,
  },
});