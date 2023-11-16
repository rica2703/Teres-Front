import React from 'react';
// import { Document, Page, Text, View, StyleSheet } from '@react-pdf-viewer/react-pdf';
import { Document } from '@react-pdf/renderer';
import { Text } from '@react-pdf/renderer';
import { Page } from '@react-pdf/renderer';
import { View } from '@react-pdf/renderer';
import { StyleSheet } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const PDFViewer = ({ productos }) => {
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          {productos.map((producto, index) => (
            <Text key={index}>
              {`${producto.conceptoPago}, ${producto.codigoProductoVendido}, ${producto.nombreProducto}, ${producto.especificaciones}, ${producto.nombreUsuario}, ${producto.fechaCompra}, ${producto.envioCosto}, ${producto.costoProducto}, ${producto.total}`}
            </Text>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default PDFViewer;
