import java.util.*;

class Solution {
    class Pair {
        int node, weight;
        Pair(int node, int weight) {
            this.node = node;
            this.weight = weight;
        }
    }

    public int minCost(int n, int[][] edges) {
        List<List<Pair>> g = new ArrayList<>();
        for (int i = 0; i < n; i++) g.add(new ArrayList<>());

        for (int[] e : edges) {
            // Forward edge cost: w
            g.get(e[0]).add(new Pair(e[1], e[2]));
            // Backward edge cost: 2w
            g.get(e[1]).add(new Pair(e[0], e[2] * 2));
        }

        int[] dist = new int[n];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[0] = 0;

        // Min-heap based on weight
        PriorityQueue<Pair> pq = new PriorityQueue<>(Comparator.comparingInt(p -> p.weight));
        pq.offer(new Pair(0, 0));

        while (!pq.isEmpty()) {
            Pair p = pq.poll();
            int u = p.node;
            int d = p.weight;

            if (d > dist[u]) continue;
            if (u == n - 1) return d;

            for (Pair v : g.get(u)) {
                int nd = d + v.weight;
                if (nd < dist[v.node]) {
                    dist[v.node] = nd;
                    pq.offer(new Pair(v.node, nd));
                }
            }
        }
        return -1;
    }
}