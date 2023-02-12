import styled from '@emotion/styled';
import colors from '../../theme';
import { Table as semanticTable } from 'semantic-ui-react';

const selectColor = (color: any) => {
  //@ts-ignore
  return Object.keys(colors).includes(color) ? colors[color] : color;
};

export const Table = styled(semanticTable)(({ props }: any) => ({
  borderCollapse: props.borderCollapse || 'separate',
  width: props.width || '100%',
  background: (props.background || 'none') + '!important',
  border: (props.border || 'none') + '!important',
  borderSpacing: (props.borderSpacing || ' 0 2rem') + '!important',
  tableLayout: props.tableLayout || 'auto' + '!important',

  th: {
    textAlign: props.thTextAlign || 'left',
    background: (props.thBackground || 'none') + '!important',
    border: (props.thBorder || 'none') + '!important',
    position: props.thPosition,
    top: props.thTop,
    backgroundColor: selectColor(props.thBackgroundColor) + '!important',
    zIndex: props.thZIndex,
  },

  tr: {
    height: props.trHeight,
  },

  'td ': {
    borderWidth: (props.tdBorderWidth || '1px 0') + '!important',
    borderColor:
      (selectColor(props.tdBorderColor) || selectColor('tableBorder')) +
      '!important',
    borderStyle: (props.tdBorderStyle || 'solid') + '!important',
    backgroundColor:
      (selectColor(props.tdBackgroundColor) || 'white') + '!important',
    padding: (props.tdPadding || '10px 15px') + '!important',
    ...(props.tdOnlyOneChild && {
      borderWidth: (props.tdBorderWidth || '1px') + '!important',
      borderRadius: (props.tdBorderRadius || '1rem') + '!important',
    }),
  },

  ...(!props.tdOnlyOneChild && {
    'td:first-of-type': {
      borderLeftWidth:
        (props.tdFirstChildBorderLeftWidth || '1px') + '!important',
      borderRadius:
        (props.tdFirstChildBorderRadius || '1rem 0 0 1rem') + '!important',
    },
    'td:last-child': {
      borderRightWidth:
        (props.tdLastChildBorderRightWidth || '1px') + '!important',
      borderRadius:
        (props.tdLastChildBorderRadius || '0 1rem 1rem 0') + '!important',
    },
  }),
  // "td:first-of-type": {
  //   borderLeftWidth: (props.tdFirstChildBorderLeftWidth || "1px") + "!important",
  //   borderRadius: (props.tdFirstChildBorderRadius || "1rem 0 0 1rem") + "!important",
  // },

  // "td:last-child": {
  //   borderRightWidth: (props.tdLastChildBorderRightWidth || "1px") + "!important",
  //   borderRadius: (props.tdLastChildBorderRadius || "0 1rem 1rem 0") + "!important",
  // }
}));
