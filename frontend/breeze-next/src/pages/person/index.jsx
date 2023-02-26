import AppLayout from "@/components/Layouts/AppLayout";
import {DataGrid} from "@mui/x-data-grid";

const rows = [
    { id: 1, name: 'JIN', kana: 'ジン', birth: '1992年12月4日' },
    { id: 2, name: 'SUGA', kana: 'シュガ', birth: '1993年3月9日' },
    { id: 3, name: 'J-HOPE', kana: 'ジェイホープ', birth: '	1994年2月18日' },
    { id: 4, name: 'RM', kana: 'アールエム', birth: '1994年9月12日' },
    { id: 5, name: 'JIMIN', kana: 'ジミン', birth: '1995年10月13日' },
    { id: 6, name: 'V', kana: 'ヴィ', birth: '1995年12月30日' },
    { id: 7, name: 'JUNG KOOK', kana: 'ジョングク', birth: '1997年9月1日' }
]

export default function Index () {
    const cols = [
        {
            field: 'name',
            headerName: '英字'
        },
        {
            field: 'kana',
            headerName: '仮名'
        },
        {
            field: 'birth',
            headerName: '生年月日'
        }
    ]
    return (
        <AppLayout>
            <div style={{ width: '100%', height: 600 }}>
                <DataGrid columns={cols} rows={rows} />
            </div>
        </AppLayout>
    );
}
