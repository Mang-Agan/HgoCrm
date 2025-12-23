import { Button, Card, DatePicker, Typography, Table } from 'antd';
const { Text } = Typography;
const { RangePicker } = DatePicker;

function Home() {
    return (
        <>
            <Card style={{ border: '1px solid #ccc', marginTop: '12px' }}>
                <div style={{ display: 'flex', gap: '12px' }}>
                    <RangePicker />
                    <Button type="primary">Halo</Button>
                    <Text>Galih Ganteng</Text>
                </div>
            </Card>
            <Table style={{ marginTop: '12px' }} columns={[]} dataSource={[]} />
        </>
    );
}

export default Home;
