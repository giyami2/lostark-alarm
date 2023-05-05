import styled from "@emotion/styled";
import Typography from "../Typography";
import Image from "next/image";
import { useState } from "react";
import ClickOutside from "@/utils/clickOutside";

export default function Selectbox({ options, value, onChange }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <ClickOutside active={expanded} onClick={() => setExpanded(false)}>
      <SelectboxContainer>
        <SelectLabel onClick={() => setExpanded(!expanded)}>
          <Typography typeface={"M4"}>{value}</Typography>
          <Image
            src={"/assets/icons/arrow-down.svg"}
            alt={"arrow-down"}
            width={20}
            height={20}
          />
        </SelectLabel>
        <SelectOptionContainer visible={expanded}>
          <SelectOptions>
            {options?.map((option, idx) => (
              <SelectOption
                key={idx}
                onClick={() => {
                  onChange(option);
                  setExpanded(false);
                }}
              >
                {option}
              </SelectOption>
            ))}
          </SelectOptions>
        </SelectOptionContainer>
      </SelectboxContainer>
    </ClickOutside>
  );
}

export const SelectboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 9px;
  gap: 11px;
  position: relative;

  background: #ffffff;
  border: 4px solid #59d4cc;
  border-radius: 10px;

  width: auto;
  height: 20px;
`;

const SelectLabel = styled.div`
  width: 100%;
  padding: 6px;
  gap: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const SelectOptionContainer = styled.div`
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  position: absolute;
  width: auto;
  height: 120px;
  left: 0;
  top: calc(100% + 11px);
  border: 1px solid #59d4cc;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #fff;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.gray2};
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;

const SelectOptions = styled.ul`
  list-style: none;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
`;

const SelectOption = styled.li`
  text-align: left;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: #f3f3f3;
  }
`;
