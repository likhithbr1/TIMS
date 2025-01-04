
const Notifications = () => {
  const [lowStock, setLowStock] = useState([]);
  const [overdueOrders, setOverdueOrders] = useState([]);

  // Mocked sample data for testing with your updated dataset
  const mockData = {
    lowStockProducts: [
      {
        ProductName: 'Product A',
        StockLevel: 5,
        ReorderPoint: 10,
        SupplierName: 'Supplier X',
        SupplierMail: 'supplierx@example.com',
        SupplierContact: '123-456-7890',
        OrderDate: '2024-01-01',
        Quantity: 20,
        OrderStatus: 'Pending'
      },
      {
        ProductName: 'Product B',
        StockLevel: 3,
        ReorderPoint: 5,
        SupplierName: 'Supplier Y',
        SupplierMail: 'suppliery@example.com',
        SupplierContact: '098-765-4321',
        OrderDate: '2024-01-02',
        Quantity: 15,
        OrderStatus: 'Overdue'
      }
    ],
    overdueOrders: [
      {
        OrderID: 101,
        ProductName: 'Product A',
        Quantity: 5,
        OrderDate: '2023-12-28',
        SupplierName: 'Supplier X',
        OrderStatus: 'Overdue'
      },
      {
        OrderID: 102,
        ProductName: 'Product B',
        Quantity: 10,
        OrderDate: '2024-01-02',
        SupplierName: 'Supplier Y',
        OrderStatus: 'Pending'
      }
    ]
  };

  // Use mocked data instead of fetching from the backend
  useEffect(() => {
    setLowStock(mockData.lowStockProducts);
    setOverdueOrders(mockData.overdueOrders);
  }, []);

  // Enhanced inline styles with more sophisticated design
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '15px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
      color: '#2c3e50',
      fontSize: '2.5rem',
      fontWeight: '700',
      borderBottom: '3px solid #3498db',
      paddingBottom: '15px',
    },
    section: {
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      padding: '25px',
      marginBottom: '25px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
    },
    sectionTitle: {
      color: '#3498db',
      fontSize: '1.8rem',
      marginBottom: '20px',
      fontWeight: '600',
      borderLeft: '5px solid #3498db',
      paddingLeft: '15px',
    },
    listContainer: {
      listStyleType: 'none',
      padding: '0',
    },
    listItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '15px',
      marginBottom: '10px',
      backgroundColor: '#f1f2f6',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
    },
    listItemHover: {
      ':hover': {
        transform: 'translateX(10px)',
        backgroundColor: '#e6e8f0',
      }
    },
    icon: {
      marginRight: '15px',
      color: '#3498db',
      fontSize: '1.5rem',
    },
    itemDetails: {
      flex: '1',
      color: '#2f3542',
    },
    badge: {
      padding: '5px 10px',
      borderRadius: '15px',
      fontSize: '0.9rem',
      fontWeight: 'bold',
    },
    lowStockBadge: {
      backgroundColor: '#ff6b6b',
      color: 'white',
    },
    pendingBadge: {
      backgroundColor: '#feca57',
      color: 'white',
    },
    overdueBadge: {
      backgroundColor: '#ff6b6b',
      color: 'white',
    },
    emptyState: {
      textAlign: 'center',
      color: '#a4b0be',
      fontStyle: 'italic',
      padding: '20px',
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Inventory Management</h1>

      {/* Low Stock Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Low Stock Alerts</h2>
        {lowStock.length > 0 ? (
          <ul style={styles.listContainer}>
            {lowStock.map((product, index) => (
              <li 
                key={index} 
                style={{
                  ...styles.listItem,
                  ...styles.listItemHover
                }}
              >
                <div style={styles.icon}>🚨</div>
                <div style={styles.itemDetails}>
                  {product.ProductName}
                  <span 
                    style={{
                      ...styles.badge,
                      ...styles.lowStockBadge,
                      marginLeft: '10px'
                    }}
                  >
                    {product.StockLevel} remaining
                  </span>
                  <div>
                    Supplier: {product.SupplierName} <br />
                    Order Date: {product.OrderDate} <br />
                    Quantity: {product.Quantity} <br />
                    Status: 
                    <span 
                      style={{
                        ...styles.badge,
                        ...(product.OrderStatus === 'Overdue' ? styles.overdueBadge : {}),
                      }}
                    >
                      {product.OrderStatus}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p style={styles.emptyState}>No low stock items at the moment</p>
        )}
      </div>

      {/* Overdue Orders Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Order Notifications</h2>
        {overdueOrders.length > 0 ? (
          <ul style={styles.listContainer}>
            {overdueOrders.map((order, index) => (
              <li 
                key={index} 
                style={{
                  ...styles.listItem,
                  ...styles.listItemHover
                }}
              >
                <div style={styles.icon}>⏰</div>
                <div style={styles.itemDetails}>
                  Order #{order.OrderID} - {order.ProductName}
                  <div>
                    Quantity: {order.Quantity} <br />
                    Order Date: {order.OrderDate} <br />
                    Supplier: {order.SupplierName} <br />
                    Status: 
                    <span 
                      style={{
                        ...styles.badge,
                        ...(order.OrderStatus === 'Overdue' ? styles.overdueBadge : styles.pendingBadge),
                        marginLeft: '10px'
                      }}
                    >
                      {order.OrderStatus}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p style={styles.emptyState}>No pending or overdue orders</p>
        )}
      </div>
    </div>
  );
};
export { Notifications };
