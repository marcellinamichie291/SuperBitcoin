import styled from 'styled-components/macro';
import { darkTheme } from '@/theme/core';

export const CellTooltipItem = styled.li`
    display: table-row;
    font-weight: bold;
    font-size: 14px;

    .exchange-list-item {
        display: table-cell;
        min-width: 90px;
        text-align: left;
        border-right: 1px solid ${darkTheme.palette.orderBookTooltipInternalLine};
        padding-right: 10px;
    }

    .right-value {
        display: table-cell;
        min-width: 70px;
        text-align: right;
        padding-left: 10px;
    }

    .own-price {
        color: ${props => (props.isBuy ? '#68B168' : '#09f')};
    }
`;
