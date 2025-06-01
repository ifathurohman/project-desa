import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { marginBottom: 10 },
  title: { fontSize: 18, marginBottom: 10 },
  text: { fontSize: 12 },
});

const MyDocument = ({ service }: { service: any }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>{service.name}</Text>
        <Text style={styles.text}>{service.description}</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
