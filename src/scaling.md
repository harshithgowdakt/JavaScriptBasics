1. A poorly written Python web service may be able to handle 1000 requests / second using $100 worth of resources, while a well written one may be able to handle the same rate with $25 worth of resources.

2. “Keep it Stupid Simple”

3. 97.42%* of all scaling bottlenecks stem from databases.

4. 97.42%* of all business problems can be reduced to CRUD, represented as relational data that need ACID guarantees and reporting that can be easily expressed as SQL.

5. 1) the schema and data representation; 2) indexing; 3) query planning; 4) database configuration. 

6.  If it is possible to combine multiple queries into a single query (nest, join, or using CTEs), it almost always gives a significant performance boost. 

7. Networking/IO is really hard. Network as little as possible.

Networking makes software problems worse by piling on complexities of bandwidth and congestion, routing, load balancing, service discovery, packet drops, timeouts and retries, port and descriptor exhaustions, kernel configuration, operational overheads, data serialisation and API woes, and an infinite number of other problems that nobody can ever foresee.

8. Connections are hard. Connect little, pool much.

9. Caching is a silver bullet, almost.

10. Dumb caching is best caching.

11. Some application state may not be bad.

12. Serialisation is expensive.

13. Some technologies are genuinely slow. Use fast technologies.

14. Scaling horizontally, vertically, and “enterprisely”.